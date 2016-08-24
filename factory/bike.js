const bike = function(attributes) {
    this.model = attributes.model || "default";
    this.speed = attributes.wheels || 2;
    this.color = attributes.color || "default";
};

export default bike;
