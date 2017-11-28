export const select = (car) => {
    alert("Now car is " + car.name);
    return {
        type: "CAR_SELECTED",
        payload: car
    };
};