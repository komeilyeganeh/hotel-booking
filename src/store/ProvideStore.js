import { Provider } from "react-redux";
import store from "./index";

const ProvidStore = (props) => {
    return <Provider store={store}>
        {props.children}
    </Provider>
}

export default ProvidStore;