import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const steps = [
  {
    id: "0",
    message: "Hey User!",

    // This calls the next id
    // i.e. id 1 in this case
    trigger: "1",
  },
  {
    id: "1",

    // This message appears in
    // the bot chat bubble
    message: "Please write your username",
    trigger: "2",
  },
  {
    id: "2",

    // Here we want the user
    // to enter input
    user: true,
    trigger: "3",
  },
  {
    id: "3",
    message: " Hi {previousValue}, Welcome to English Tutor Bot.",
    trigger: 5,
  },
  {
    id: "4",
    options: [
      // When we need to show a number of
      // options to choose we create alist
      // like this
      { value: 1, label: "View Courses" },
      { value: 2, label: "Read Articles" },
    ],
  },
  {
    id: "5",
    user: true,
    trigger: 6,
  },
  {
    id: "6",
    message: "Sorry. We are currently under development.",
    trigger: 5,
  },
];

// Creating our own theme
const theme = {
  background: "#DBF8BD",
  headerBgColor: "#074E0E",
  headerFontSize: "20px",
  botBubbleColor: "#0A2C6E",
  headerFontColor: "white",
  botFontColor: "white",
  userBubbleColor: "#A53834E7",
  userFontColor: "white",
};

// Set some properties of the bot
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ChatBot
          // This appears as the header
          // text for the chat bot
          headerTitle="English Tutor Bot"
          steps={steps}
        />
      </ThemeProvider>
    </div>
  );
}

export default App;
