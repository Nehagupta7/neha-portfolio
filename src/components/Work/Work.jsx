import React, { useRef } from 'react'
import styled from 'styled-components'
import ClientSlider from './Card';
import { Slide } from 'react-awesome-reveal';

let clients = [
    {
        name: "Roaring Tiger",
        technology: "Mern Stack",
        disc: [
            "Built the frontend in React.js from scratch.",
            "Created landing pages and an admin panel.",
            "All the content on landing pages is managed via the admin panel."
        ]
    },
    {
        name: "Preference App",
        technology: "Mern Stack",
        disc: [
            "Handled the frontend React.js part.",
            "Developed the admin panel and company panel.",
            "Used the Material-UI frontend framework."
        ]
    },
    {
        name: "PVM",
        technology: "Mern Stack",
        disc: [
            "Used the Next.js framework.",
            "Built the admin panel.",
            "Used the Material-UI frontend framework and Tailwind CSS."
        ]
    },
    {
        name: "Lakshaya Project",
        technology: "React with Python",
        disc: [
            "Used the Next.js framework.",
            "Built the admin panel.",
            "Used the Material-UI frontend framework and Tailwind CSS."
        ]
    },
    {
        name: "E-Commerce Application",
        technology: "Mern Stack",
        disc: [
            "Used the Next.js 12 framework.",
            "Built the e-commerce application.",
            "Used the Material-UI frontend framework."
        ]
    },
    {
        name: "B2B Website",
        technology: "Next.js 14 with Go & Python",
        disc: [
            "Developed a full B2B platform with e-commerce features.",
            "Implemented multi-role access with dynamic role views.",
            "Focused on UX improvements through intuitive design.",
            "Built client/server APIs ensuring smooth interaction.",
            "Integrated multilingual support for global accessibility."
        ]
    }
];



const Clients = () => {
    let clientDisc = "";
    clientDisc = clients.map((item, i) => (
        <ClientSlider item={item} key={i} />
    ))
    return (
        <Container id='work'>
            <Slide direction="left">
                <span className="green">Live Project </span>
                <h1>Work Experience</h1>
            </Slide>
            <Card>
                {clientDisc}
            </Card>

        </Container>
    )
}

export default Clients

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 4rem 0;

    @media(max-width:840px){
        width: 90%;
    }
`
const Card = styled.div`
display:grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
margin-top: 4rem;
gap: .5rem;
`;
