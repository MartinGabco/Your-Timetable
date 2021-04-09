// compulsory courses
export const compulsoryMessages = [
    {id:"1", text: "You are searching compulsory courses for Monday", name:"Monday"},
    {id:"2", text: "You are searching compulsory courses for Tuesday", name:"Tuesday"},
    {id:"3", text: "You are searching compulsory courses for Wednesday", name:"Wednesday"},
    {id:"4", text: "You are searching compulsory courses for Thursday", name:"Thursday"},
    {id:"5", text: "You are searching compulsory courses for Friday", name:"Friday"},
];

export function getCompulsoryMessages() {
    return compulsoryMessages.filter(m => m);
}

export const allCompulsoryDaysMessage = [
    {text: "You are searching compulsory courses chosen by you for all days", name: "All days"}
];

export function getAllCompulsoryDaysMessage() {
    return allCompulsoryDaysMessage;
}

// elective courses
export const electiveMessages = [
    {id:"1", text: "You are searching elective courses for Monday", name:"Monday"},
    {id:"2", text: "You are searching elective courses for Tuesday", name:"Tuesday"},
    {id:"3", text: "You are searching elective courses for Wednesday", name:"Wednesday"},
    {id:"4", text: "You are searching elective courses for Thursday", name:"Thursday"},
    {id:"5", text: "You are searching elective courses for Friday", name:"Friday"},
];

export function getElectiveMessages() {
    return electiveMessages.filter(m => m);
}

export const allElectiveDaysMessage = [
    {text: "You are searching elective courses chosen by you for all days", name: "All days"}
];

export function getAllElectiveDaysMessage() {
    return allElectiveDaysMessage;
}




