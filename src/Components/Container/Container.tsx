type ContainerProps = {
    color?: string,
    width?: string,
    padding?: string,
    className?: string,
    children?: React.ReactNode
}

export const Container = ({ color, width, padding, className, children }: ContainerProps) => {
  return (
    <section style={{ backgroundColor: color, width: width, padding: padding }} className={className}>
      {children}
    </section>
  )
}
