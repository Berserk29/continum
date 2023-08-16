export const variantUp = {
    visible: {opacity: 1, y: 0, transition: {duration: .8}},
    hidden: {opacity: 0, y: "100px"}
}

export const variantUpDelay = (delay) => {
    return {
        visible: {opacity: 1, y: 0, transition: {duration: .8, delay: delay}},
        hidden: {opacity: 0, y: '120px'}
    }
}