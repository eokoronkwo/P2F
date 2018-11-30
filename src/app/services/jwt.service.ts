import { Injectable } from '@angular/core';
// import * as jwt from 'jsonwebtoken';
// import * as fs from 'fs';

// // Header
// const oHeader = {alg: 'HS256', typ: 'JWT'};
// // Payload
// const oPayload = {};
// const tNow = KJUR.jws.IntDate.get('now');
// const tEnd = KJUR.jws.IntDate.get('now + 1day');
// oPayload.iss = 'http://foo.com';
// oPayload.sub = 'mailto:mike@foo.com';
// oPayload.nbf = tNow;
// oPayload.iat = tNow;
// oPayload.exp = tEnd;
// oPayload.jti = 'id123456';
// oPayload.aud = 'http://foo.com/employee';
// // Sign JWT, password=616161
// const sHeader = JSON.stringify(oHeader);
// const sPayload = JSON.stringify(oPayload);
// const sJWT = KJUR.jws.JWS.sign('HS256', sHeader, sPayload, '616161');
@Injectable({
  providedIn: 'root'
})
export class JwtService {
  // oHeader = {alg: 'HS256'};
  // sHeader = JSON.stringify(this.oHeader);
  // sPayload = 'aaa';
  // privateKey: 'iamprivate';
  // jwt = require('jsonwebtoken');
  // token = jwt.sign('any', this.privateKey);

  constructor() { }
}
