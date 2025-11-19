import { useNavigate } from "react-router";
import { routePath } from "src/routers/path";

import { useFunnel } from "./hooks/use-funnel";
import { useJoinForm } from "./hooks/use-join-form";
import Id from "./step/id";
import Info from "./step/info";
import Password from "./step/password";

import * as styles from "./join.css";

const Join = () => {
  const navigate = useNavigate();

  const { formState, errorMessage, handleChange, handleSubmit, isMatch } =
    useJoinForm();

  const { Funnel, Step, next } = useFunnel({
    initial: "id",
    steps: ["id", "password", "info"],
  });

  return (
    <section className={styles.loginAllContainer}>
      <div>
        <button
          className={styles.prevButton}
          type="button"
          onClick={() => navigate(routePath.LOGIN)}
        >
          이전
        </button>
        <div className={styles.stepBoxContainer}>
          <h2 className={styles.title}>회원가입</h2>
          <Funnel>
            <Step name="id">
              <Id
                id={formState.id}
                onChange={handleChange}
                next={next}
                errorMessage={errorMessage}
              />
            </Step>

            <Step name="password">
              <Password
                password={formState.password}
                passwordConfirm={formState.passwordConfirm}
                onChange={handleChange}
                next={next}
                errorMessage={errorMessage}
                isMatch={isMatch}
              />
            </Step>

            <Step name="info">
              <Info
                name={formState.name}
                email={formState.email}
                age={formState.age}
                onChange={handleChange}
                onSubmit={handleSubmit}
              />
            </Step>
          </Funnel>
        </div>
      </div>
    </section>
  );
};

export default Join;
