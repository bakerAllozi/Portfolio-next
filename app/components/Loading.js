import { Spinner } from "@nextui-org/react";

function loading() {
  return (
    <div>
      <Spinner label="Secondary" color="secondary" labelColor="secondary" />
    </div>
  );
}

export default loading;
