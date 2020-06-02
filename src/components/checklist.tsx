import classNames from "classnames"
import React from "react"
import { Link } from "gatsby"
import { createLinkFromId } from "../lib/link"
import { id as accomodationsId } from "./content/accomodations"
import { id as coverChargeId } from "./content/cover-charge-and-gifts"
import EmailLink from "./email-link"
import "./checklist.css"
import { create } from "domain"

const renderListItem = (children: React.ReactNode) => (
  <li className="Checklist-list-item">{children}</li>
)

const Checklist: React.FC = () => (
  <div id="checklist" className="Checklist">
    <div className="Checklist-inner">
      <h2 className="Checklist-title">Checklista inför bröllopet</h2>
      <div className="Checklist-separator" />
      <p>Vill du dela denna dag med oss?</p>
      <br />
      <p>Kom ihåg att:</p>
      <div className="Checklist-list-container">
        <ol className={classNames("Checklist-list", "Checklist-list--ordered")}>
          {renderListItem(
            <>
              Anmäla dig/er genom att betala in{" "}
              <Link to={createLinkFromId(coverChargeId)}>kuvertavgiften</Link>
            </>
          )}
          {renderListItem(
            <>
              Maila toastparet (<EmailLink />) med information om du/ni:
              <ul
                className={classNames(
                  "Checklist-list",
                  "Checklist-list--unordered"
                )}
              >
                {renderListItem("behöver någon specialkost")}
                {renderListItem(
                  "vill åka med i bussen mellan Umeå och Baggböle Herrgård"
                )}
                {renderListItem("vill hålla tal eller spex på bröllopsfesten")}
                {renderListItem("vill delta på fredagskvällen")}
                {renderListItem("vill delta på lunch på söndagen")}
              </ul>
            </>
          )}
          {renderListItem(
            <>
              <Link to={createLinkFromId(accomodationsId)}>Boka hotellrum</Link>{" "}
              - vi har möjlighet att erbjuda hotellrum för 650 kr / natt
            </>
          )}
        </ol>
      </div>
    </div>
    <div className="Checklist-separator" />
  </div>
)

export default Checklist
