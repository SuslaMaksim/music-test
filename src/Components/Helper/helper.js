export let getWeekDay = (date) => {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

    return days[date.getDay()];
}

export let getTime=(date)=>{
    return date.toLocaleTimeString()
}


export let findeIcon = (item)=>{
    let {icon} = item.weather.find(item => item.icon)
    return icon;
}
