import { stringToBool } from './utilities'

describe('bool', () => {
  describe('check boolean conversion working correctly', () => {
    it('should convert string to boolean', () => {
      expect(stringToBool('TRUE')).toBeTruthy()
      expect(stringToBool('FALSE')).toBeFalsy()
    })
  })
})
