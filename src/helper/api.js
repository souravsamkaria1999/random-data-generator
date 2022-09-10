import axios from "axios";
import React from "react";

const ResourceLoader = ({ children, resourceUrl, resourceName }) => {
  const [resource, setResource] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const respose = await axios.get(resourceUrl);
      const currentresource = respose.data;
      setResource(currentresource);
    })();
  }, [resourceUrl]);
  console.log(resourceName)

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: resource });
        }
      })}
    </>
  );
};

export default ResourceLoader;
