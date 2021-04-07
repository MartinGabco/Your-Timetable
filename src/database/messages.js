export const messages = [
    {id:"1", text: "You are searching compulsory courses for Monday", name:"Monday"},
    {id:"2", text: "You are searching compulsory courses for Tuesday", name:"Tuesday"},
    {id:"3", text: "You are searching compulsory courses for Wednesday", name:"Wednesday"},
    {id:"4", text: "You are searching compulsory courses for Thursday", name:"Thursday"},
    {id:"5", text: "You are searching compulsory courses for Friday", name:"Friday"},
];

export function getMessages() {
    return messages.filter(m => m);
}

export const allDaysMessage = [
    {text: "You are searching compulsory courses chosen by you for all days", name: "All days"}
];

export function getAllDaysMessage() {
    return allDaysMessage;
}

