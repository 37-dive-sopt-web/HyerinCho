import {
  Children,
  type FC,
  type ReactElement,
  type ReactNode,
  useMemo,
  useRef,
  useState,
} from "react";

type StepName = string;

interface UseFunnelOptions {
  initial: StepName;
  steps: StepName[];
}

interface StepProps {
  name: StepName;
  children: ReactNode;
}

interface UseFunnelResult {
  Funnel: FC<{ children: ReactNode }>;
  Step: FC<StepProps>;
  next: () => void;
}

/**
 * 단계별 흐름(Funnel Pattern)을 관리하고, 현재 단계에 맞는 컴포넌트만 렌더링하는 훅입니다.
 *
 * 설정된 `steps` 배열의 순서대로 `next()` 함수를 통해 이동하며,
 * `<Funnel>` 내부에서 현재 단계(`name`)와 일치하는 `<Step>`만 화면에 표시합니다.
 *
 * @param options.initial - 최초로 보여줄 단계의 이름
 * @param options.steps - 전체 단계의 순서를 정의한 문자열 배열
 *
 * @returns
 * - `Funnel`: 단계별 컴포넌트를 감싸는 래퍼 컴포넌트
 * - `Step`: 각 단계를 정의하는 컴포넌트 (prop: `name`)
 * - `next`: 다음 단계로 이동하는 함수
 */
export const useFunnel = ({
  initial,
  steps,
}: UseFunnelOptions): UseFunnelResult => {
  const [current, setCurrent] = useState<StepName>(initial);

  const currentRef = useRef<StepName>(initial);
  currentRef.current = current;

  const stepIndexMap = useMemo(
    () =>
      steps.reduce<Record<StepName, number>>((acc, step, index) => {
        acc[step] = index;
        return acc;
      }, {}),
    [steps],
  );

  const next = () => {
    setCurrent((prev) => {
      const index = stepIndexMap[prev];
      if (index == null) return prev;

      const nextIndex = Math.min(index + 1, steps.length - 1);
      return steps[nextIndex];
    });
  };

  const { Funnel, Step } = useMemo(() => {
    const FunnelComponent: FC<{ children: ReactNode }> = ({ children }) => {
      const childArray = Children.toArray(
        children,
      ) as ReactElement<StepProps>[];

      const currentStepElement =
        childArray.find((child) => child.props.name === currentRef.current) ??
        null;

      return currentStepElement;
    };

    const StepComponent: FC<StepProps> = (props) =>
      props.children as ReactElement | null;

    return {
      Funnel: FunnelComponent,
      Step: StepComponent,
    };
  }, []);

  return { Funnel, Step, next };
};
