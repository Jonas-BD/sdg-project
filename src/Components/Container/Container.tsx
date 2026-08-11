type ContainerProps = {
    color: string,
    width: string,
    padding: number
}

export const Container = ({ color, width, padding }:ContainerProps) => {
  return (
    <section style={{ backgroundColor: color, width: width, padding: padding }}>
        Container
    </section>
  )
}
