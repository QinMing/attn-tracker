type Point = { x: number; y: number };

export function faceSize(
  bounds: {
    size: {
      width: number;
      height: number;
    };
    origin: Point;
  }
): number {
  return bounds.size.width;
}
