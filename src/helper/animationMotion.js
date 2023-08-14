// TODO DELETE VARIANT NOT USED ANYMORE

export const variantLeft = {
    visible: {opacity: 1, x: 0, transition: {duration: 1.4}},
    hidden: {opacity: 0, x: "-200%"}
}

export const variantRight = {
    visible: {opacity: 1, x: 0, transition: {duration: 1.4}},
    hidden: {opacity: 0, x: "200%"}
}

export const variantScale = {
    visible: {opacity: 1, scale: 1, transition: {duration: .5, delay: 1.2}},
    hidden: {opacity: 0, scale: 0}
}


export const slowVariantUp = {
    visible: {opacity: 1, y: 0, transition: {duration: .8, delay: 1}},
    hidden: {opacity: 0, y: "50%"} 
}

export const slowVariantScale = {
    visible: {opacity: 1, scale: 1, transition: {duration: .8}},
    hidden: {opacity: 0, scale: 0}
}

// I USED

export const variantUp = {
    visible: {opacity: 1, y: 0, transition: {duration: .8}},
    hidden: {opacity: 0, y: "100px"}
}