class CustomError extends Error {
    code: number | string;

    constructor(message: string, code: number | string) {
        super(message);
        this.code = code;
    }
}

export default CustomError;