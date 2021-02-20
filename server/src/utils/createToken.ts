import jwt from 'jsonwebtoken';

export const createToken = (id: number, email: string, role: string): string => {
  return jwt.sign({id, email, role}, process.env.JWT_STRING || 'some string', {expiresIn: '30 d'});
}