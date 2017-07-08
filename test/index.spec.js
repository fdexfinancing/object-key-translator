const translate = require('../index');
const assert = require('assert');

const dict = {
  valid_value: 'Valor válido',
  true: 'Verdadeiro',
  valid_items: 'Itens válidos',
  nested: 'Encadeado'
};

describe('object translate tests', () => {

  it('should translate a object', () => {

    let target = {
    	valid_value: {
      	true: 1,
        valid_items: [
        	'Teste',
          '123',
          '456'
        ]
      }
    };

    let expected_result = {
      'Valor válido': {
        Verdadeiro: 1,
        'Itens válidos': [
          'Teste', '123', '456' ]
        }
      };

    let translation = translate(target, dict);

    assert.deepEqual(expected_result, translation);
  });

  it('should translate an array of objects', () => {
    let obj = [{
    	valid_value: {
      	true: 1,
        valid_items: [
        	'Teste',
          '123',
          '456'
        ]
      }
    }, {
      nested: 1
    }];

    let expected_result = [{
      'Valor válido': {
        Verdadeiro: 1,
        'Itens válidos': [
          'Teste', '123', '456' ]
        }
      }, {
        'Encadeado': 1
      }];

    let translation = translate(obj, dict);

    assert.deepEqual(expected_result, translation);
  });

  it('should translate a empty object', () => {
    let target = {};
    let translation = translate(target, dict);

    assert.deepEqual({}, translation);
  });

  it('should translate an array', () => {
     let target = [
       [
         'Test 234',
         'Test 123',
         [
           'Test 456',
           'Test 345'
         ]
       ]
     ];

     let translation = translate(target, dict);

     assert.deepEqual(target, translation);
  });

  it('should translate a mixed object - array and objects', () => {
    let target = [
      [
        'Test 234',
        'Test 123',
        [
          'Test 456',
          'Test 345'
        ],
        [
          {
            valid_items: {
              valid_value: 'Yes'
            }
          }
        ]
      ]
    ];

    let expected_result = [
      [
        'Test 234',
        'Test 123',
        [
          'Test 456',
          'Test 345'
        ],
        [
          {
            'Itens válidos': {
              'Valor válido': 'Yes'
            }
          }
        ]
      ]
    ]

    let translation = translate(target, dict);

    assert.deepEqual(expected_result, translation);
  });

});
