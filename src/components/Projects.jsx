import Text from './Text'
import { useTranslation } from "react-i18next";

const Projects = () => {
    const t = useTranslation();
  return (
    <div>
        <Text text={"Here are some of my projects:"} size={"4rem"}/>
        <ul>
            <Text text={"Project 1"} size={"2rem"}></Text>
            <Text text={"Project 2"} size={"2rem"}></Text>
            <Text text={"Project 3"} size={"2rem"}></Text>
        </ul>
    </div>
  )
}

export default Projects
