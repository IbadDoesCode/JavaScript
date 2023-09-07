// Group Array in JS
const teams = [
    {
        name:'The Vakers',
        origin:'California',
        tier:'legendary'
    },
    {
        name:'Marviks',
        origin:'NYC',
        tier:'mid'
    },
]

const tireteams = teams.group(
    ({tier}) => tier
)