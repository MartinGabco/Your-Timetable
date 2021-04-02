export const days = [
    {id:"1", name:"Monday"},
    {id:"2", name:"Tuesday"},
    {id:"3", name:"Wednesday"},
    {id:"4", name:"Thursday"},
    {id:"5", name:"Friday"},
];

export function getDays() {
    return days.filter(d => d);
}