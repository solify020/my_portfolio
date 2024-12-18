import { useEffect, useRef } from 'react'

type Props = Record<string, any>

export const useWhyDidPropsUpdate = (
  currentNameComponent: string,
  componentProps: Props,
) => {
  const previousProps = useRef<Props | undefined>(undefined)

  useEffect(() => {
    if (previousProps.current) {
      const allProps = Object.keys({
        ...previousProps.current,
        ...componentProps,
      })
      const changesObj: Record<string, { from: any; to: any }> = {}

      allProps.forEach(key => {
        if (previousProps.current![key] !== componentProps[key]) {
          changesObj[key] = {
            from: previousProps.current![key],
            to: componentProps[key],
          }
        }
      })

      if (Object.keys(changesObj).length) {
        // eslint-disable-next-line no-console
        console.log(currentNameComponent, changesObj)
      }
    }

    previousProps.current = componentProps
  }, [componentProps, currentNameComponent])
}
