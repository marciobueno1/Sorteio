import Reactotron, { overlay } from "reactotron-react-native";
import AsyncStorage from "@react-native-community/async-storage";

const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure({
    // host: "192.168.15.58", // Deve ser comentada se estiver usando emulador
    name: "Sorteio App",
  })
  .useReactNative({
    networking: {
      ignoreUrls: /symbolicate/,
    },
  })
  .use(overlay());

reactotron.connect();

export default reactotron;
