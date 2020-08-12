import React from 'react';
import { Accordion, AccordionSummary, Typography, AccordionDetails, Tabs, Tab } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { TabPanel, a11yProps } from '../TabPanel/TabPanel';
import { AboutMeAccordionInfo } from './AboutMeAccordionInfo';

export default function AboutMeAccordion(props) {
    const [value, setValue] = React.useState(0);
    const [expanded, setExpanded] = React.useState(false);

    const handleTabChange = (event, newValue) => {
        setValue(newValue)
    }

    const handleAccordionChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
        setValue(0)
    };

    return (
        <div>
            {AboutMeAccordionInfo.map((section, index) => (
                <Accordion 
                    expanded={expanded === `panel${index}`} 
                    onChange={handleAccordionChange(`panel${index}`)}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${index}a-content`}
                        id={`panel${index}a-header`}
                    >
                        <Typography>{section[0]}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Tabs
                            orientation="vertical"
                            value={value}
                            onChange={handleTabChange}
                        >
                            {section[1].map((info, index) => (
                                <Tab label={info[0]} {...a11yProps(index)} />
                            ))}
                        </Tabs>
                        {section[1].map((info, index) => (
                            <TabPanel value={value} index={index}>
                                {info[1]}
                            </TabPanel>
                        ))}
                    </AccordionDetails>
                </Accordion>
            ))
            }
        </div>
    );
}