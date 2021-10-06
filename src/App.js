import React from "react";
import ProviderApi from "./ContextAPI/ProviderApi";
import Clientes from "./Paginas/Clientes";

function App() {
  return (
    <ProviderApi>
      <Clientes />
    </ProviderApi>
  );
}

export default App;
