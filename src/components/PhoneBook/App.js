import React from "react";
import SearchForm from "./Form/SearchForm";
import  FindedContact  from "./FindedContact/FindedContact";

const App = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: 280,
      border: "2px dotted white",
      backgroundColor: "black",
    }}
  >
    <SearchForm />
    <FindedContact />
  </div>
);

export default App;

// const userSelector = (clients, filter) =>
//   clients.filter((client) =>
//     client.name.toLowerCase().includes(filter.toLowerCase())
//   );
// class App extends Component {
//   // componentDidMount() {
//   //   this.setState({
//   //     clients: localStorage.getItem("clients")
//   //       ? JSON.parse(localStorage.getItem("clients"))
//   //       : this.props.clients,
//   //   });
//   // }

//   // filterClient = ({ target: { value } }) => {
//   //   this.setState({ filter: value });
//   // };
//   // addClientData = (client) => {
//   //   this.setState((prev) => {
//   //     localStorage.setItem(
//   //       "clients",
//   //       JSON.stringify([...prev.clients, client])
//   //     );
//   //     return { clients: [...prev.clients, client] };
//   //   });
//   // };

//   render() {
//     // const { clients, filter } = this.props;
//     // const filteredClients = userSelector(clients, filter);
//     return (
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           width: 280,
//           border: "2px dotted white",
//           backgroundColor: "black",
//         }}
//       >
//         <Form />
//         <FindedContact />

//         {/* <FindedContact
//           onfilterClient={this.filterClient}
//           value={filter}
//           filteredClients={filteredClients}
//           onDelComponent={this.delComponent}
//         /> */}
//       </div>
//     );
//   }
// }
// // const mapStateToProps = (state) => {
// //   console.log("state", state);
// //   return {
// //     clients: state.appReducer.clients,
// //     filter: state.appReducer.filter,
// //   };
// // };

// // const mapDispatchToProps = (dispath) => {
// //   return {
// //     addContact: () => dispath(addContact()),
// //   };
// // };

// // export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;
