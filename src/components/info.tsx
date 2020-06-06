import React from "react"
import Separator from "./separator"
import "./info.css"

const Info: React.FC = () => (
  <div id="info" className="Info">
    <div className="Info-inner">
      <h2 className="Info-title">
        Tack för alla anmälningar till vårt bröllop!
      </h2>
      <Separator />
      <p>
        Framförallt stort tack för ert fina stöd och tålamod kring hela
        situationen.
      </p>
      <p>Vi ska nu sammanställa och planera allt noggrannare.</p>
      <p>All information om bröllopshelgen kommer under nästa vecka till er!</p>
      <br />
      <p>
        Vår plan och förhoppning är fortfarande att hålla bröllopet som
        planerat, med vissa justeringar.
      </p>
      <p className="Info-small">
        (Skulle detta inte gå är vår plan B att bröllopet flyttas till 19
        september. Vi uppdaterar er i sådana fall senast 15 juli)
      </p>
      <br />
      <p>
        Vi längtar så och har tack vare all kärlek från er fått ny energi till
        att göra den här dagen och helgen till den bästa någonsin.
      </p>
      <br />
      <p>Linnéa &amp; Rickard</p>
    </div>
  </div>
)

export default Info
