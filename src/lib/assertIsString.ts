type Assert = (str: unknown, errorMsg?: string) => asserts str is string;

export const assertIsString: Assert = (str, errorMsg) => {
  if (typeof str !== "string") {
    throw new Error(errorMsg || "ValueIsNotString");
  }
};
