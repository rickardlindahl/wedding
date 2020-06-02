import React from "react"
import Separator from "./separator"
import "./corona-info.css"

const CoronaInfo: React.FC = () => (
  <div id="corona" className="CoronaInfo">
    <div className="CoronaInfo-inner">
      <h2 className="CoronaInfo-title">Viktig information gällande covid-19</h2>
      <Separator />
      <p className="CoronaInfo-important">
        Folkhälsomyndigheten har informerat att uppdaterade restriktioner inför
        sommaren kommer den 3 juni.
        <br />
        Vi förlänger därför O.S.A. till dess att de har uppdaterats.
      </p>
      <br />
      <p>
        Vår avsikt och förhoppning är att genomföra bröllopet som planerat. Vi
        ser fram emot att få träffa er alla och dela denna dag, som vi längtat
        efter så länge, tillsammans med er!
      </p>
      <br />
      <p>
        Om restriktionerna gällande sammankomster med över 50 personer inte har
        lättats upp till 15 juli, kommer bröllopet flyttas fram till lördag 19
        september.
      </p>
      <br />
      <p>
        Om restriktionerna gällande sammankomster med över 50 personer inte har
        lättats upp till 25 augusti, kommer bröllopet flyttas fram till år 2021.
        Vi återkommer i sådana fall med information om dag, plats samt
        återbetalning av kuvertavgiften längre fram.
      </p>
    </div>
    <Separator />
  </div>
)

export default CoronaInfo
