import { Grid, Modal } from "@mui/material";
import React from "react";
import { ApplicationName } from "../../utils/Application";
import AppsListCard from "./AppListCard";
import { appConfig } from "../../confing";
import { appServerPortNumberMapping } from "../../utils/localSetup";

export default function AppsList({ openAppList, setOpenAppsList }) {
  const redirectToAppService = item => {
    console.log(item);
        
         if (!item.domain) {
             console.log("Invalid Sub Domain.");
             return null;
         }
  
         let protocol = "https";
         let portNumber = null;
         let appUrl = `${protocol}://${item.domain}.${appConfig.REACT_APP_BASE_DOMAIN_URL}`;
         if (window.location.protocol === "http:") {
             const localAppServerData = appServerPortNumberMapping(item.appName);
             console.log(localAppServerData)
             if (localAppServerData) {
                 protocol = "http";
                 portNumber = `:${localAppServerData.PORT}`;
                 appUrl = `${protocol}://${item.domain}.${appConfig.REACT_APP_BASE_DOMAIN_URL}${portNumber}`;
             }
         }
         console.log(appUrl,"appurl")
         window.open(appUrl, "_blank");
     };
  

  return (
    <Modal
      style={{
        paddingTop: "50px",
        justifyContent: "end",
        display: "flex",
        height: "55%",
        marginRight: "20px",
      }}
      open={openAppList}
      onClose={() => setOpenAppsList(false)}
    >
      <Grid container className="app-list-grid-container">
        {ApplicationName.length > 0 &&
          ApplicationName.map((app, key) => (
            <Grid
              item
              key={key}
              md={4}
              className="app-list-grid"
              onClick={() => redirectToAppService(app)}
            >
              <AppsListCard app={app} />
            </Grid>
          ))}
      </Grid>
    </Modal>
  );
}
