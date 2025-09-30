"use client"

import Image from "next/image"

const integrations = [
  {
    src: "tool.png",
    alt: "Logo of Jira Cloud",
  },
  {
    src: "tool1.png",
    alt: "Logo of Outlook Calendar",
  },
  {
    src: "tool2.png",
    alt: "Logo of Google Drive",
  },
  {
    src: "tool3.png",
    alt: "Logo of Salesforce",
  },
  {
    src: "tool4.png",
    alt: "Logo of AWS Support",
  },
  {
    src: "tool5.png",
    alt: "Logo of Miro",
  },
  {
    src: "tool6.png",
    alt: "Logo of OneDrive and SharePoint",
  },
  {
    src: "tool7.png",
    alt: "Logo of Box",
  },
  {
    src: "tool8.png",
    alt: "Logo of Asana",
  },
  {
    src: "tool9.png",
    alt: "Logo of Confluence Cloud",
  },
  {
    src: "tool10.png",
    alt: "Logo of GitHub Enterprise Server",
  },
  {
    src: "tool11.png",
    alt: "Logo of Docusign",
  },
  {
    src: "tool12.png",
    alt: "Logo of Zoom",
  },
  {
    src: "tool13.png",
    alt: "Logo of PagerDuty",
  },
  {
    src: "tool14.png",
    alt: "Logo of Notion",
  },
]


export default function IntegrationGrid() {
  return (
    <section className="v--borderless c-integration-grid hidden mt-5 md:grid grid-cols-5 gap-5">
      {integrations.map((integration, index) => (
        <div
          key={index}
          className="c-integration-grid__icon flex justify-center items-center"
          style={{ background: "transparent" }}
        >
            <Image
              className="c-rounded-icon"
              src={integration.src}
              alt={integration.alt}
              width={72}
              height={72}
            />
        </div>
      ))}
    </section>
  )
}
