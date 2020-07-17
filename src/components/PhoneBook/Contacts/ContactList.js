import React from "react";
import ContactListItem from "./ContactListItem";
import { connect } from "react-redux";
const style = {
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: 280,
  borderRadius: "15%",
  border: "2px dotted white",
  backgroundColor: "black",
};

const ContactList = (props) => {
  const { clients, filteredContacts } = props;
  // console.log("filteredContacts", filteredContacts);
  // return filteredContacts && {   filteredContacts.map((client) => (
  console.log("filteredContacts.length >0", filteredContacts.length > 0);
  return filteredContacts.length === 0
    ? clients.map((client) => (
        <div className={style} key={client.id}>
          <ContactListItem client={client} />
        </div>
      ))
    : filteredContacts.map((client) => (
        <div className={style} key={client.id}>
          <ContactListItem client={client} />
        </div>
      ));
};

const mapStateToProps = (state) => {
  // console.log('state.filteredReducer', state.filteredReducer)
  return {
    clients: state.appReducer.appReducer,
    filteredContacts: state.appReducer.filteredReducer,
  };
};

export default connect(mapStateToProps)(ContactList);

// const ContactList = (props) => {
//   const { clients: clientsFromProps, clientsFromSearch } = props;
//   // return clientsFromSearch && {   clientsFromSearch.map((client) => (
//   return clientsFromSearch !== ""
//     ? clientsFromSearch.map((client) => (
//         <div
//           className="contactList"
//           key={client.id}
//           style={{
//             padding: "10px",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "center",
//             width: 280,
//             borderRadius: "15%",
//             border: "2px dotted white",
//             backgroundColor: "black",
//           }}
//         >
//           <ContactListItem client={client} />
//         </div>
//       ))
//     : clientsFromProps.map((client) => (
//         <div
//           className="contactList"
//           key={client.id}
//           style={{
//             padding: "10px",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "center",
//             width: 280,
//             borderRadius: "15%",
//             border: "2px dotted white",
//             backgroundColor: "black",
//           }}
//         >
//           <ContactListItem client={client} />
//         </div>
//       ));
// };

// const ContactList = (props) => {
//   const { clients: clientsFromProps, clientsFromSearch } = props;
//   console.log('clientsFromSearch', clientsFromSearch)
//   console.log('clientsFromProps', clientsFromProps)

//   if (!clientsFromProps.length) {
//     alert("Enter first name");
//   }
//   return clientsFromProps.length ? (
//     clientsFromProps.map((client) => (
//       <div
//         className="contactList"
//         key={client.id}
//         style={{
//           padding: "10px",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           width: 280,
//           borderRadius: "15%",
//           border: "2px dotted white",
//           backgroundColor: "black",
//         }}
//       >
//         <ContactListItem client={client} />
//       </div>
//     ))
//   ) : (
//     <div className="contactList">
//       <p>Contacts is not available</p>
//     </div>
//   );
// };
// const mapStateToProps = (state) => ({ clients: state.appReducer });

// export default connect(mapStateToProps)(ContactList);
