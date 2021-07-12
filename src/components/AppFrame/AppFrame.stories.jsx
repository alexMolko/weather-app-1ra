import AppFrame from "./AppFrame";
import 'typeface-roboto'
import { BrowserRouter as Router } from "react-router-dom";
export default {
    title: "AppFrame",
    component: AppFrame
}

export const AppFrameExample = () => (
<Router>
    <AppFrame>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem tenetur porro maxime facilis dolor sapiente repellat eligendi quaerat harum saepe. Nulla voluptatem mollitia culpa nesciunt quos explicabo impedit quam fuga?
    </AppFrame>
</Router>)