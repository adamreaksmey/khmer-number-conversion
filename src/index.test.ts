import { convertToKhmerNumbers } from "./index";

describe("convertToKhmerNumbers", () => {
  it("should correctly convert single digit numbers", () => {
    expect(convertToKhmerNumbers(1)).toBe("១");
    expect(convertToKhmerNumbers(5)).toBe("៥");
    expect(convertToKhmerNumbers(9)).toBe("៩");
  });

  it("should correctly convert multi-digit numbers", () => {
    expect(convertToKhmerNumbers(123)).toBe("១២៣");
    expect(convertToKhmerNumbers(4567890)).toBe("៤៥៦៧៨៩០");
  });

  it("should handle string inputs", () => {
    expect(convertToKhmerNumbers("123")).toBe("១២៣");
  });

  it("should handle non-numeric characters in string input", () => {
    expect(convertToKhmerNumbers("123abc")).toBe("១២៣abc");
    expect(convertToKhmerNumbers("45-67")).toBe("៤៥-៦៧");
  });

  it("should return an empty string for an empty input", () => {
    expect(convertToKhmerNumbers("")).toBe("");
  });

  it("should handle 0 correctly", () => {
    expect(convertToKhmerNumbers(0)).toBe("០");
  });
});
