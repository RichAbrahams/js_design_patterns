const car = function(attributes) {
    this.model = attributes.model || "default";
    this.speed = attributes.speed || 2;
    this.color = attributes.color || "default";
};

export default car;
