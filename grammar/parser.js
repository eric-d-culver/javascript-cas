/* parser generated by jison 0.4.10 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var parser = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"S":4,"EOF":5,"e":6,"stmt":7,"=":8,"!=":9,"<=":10,"<":11,">":12,">=":13,"csl":14,",":15,"vector":16,"(":17,")":18,"+":19,"-":20,"*":21,"/":22,"POWER{":23,"}":24,"_{":25,"_SINGLE":26,"SQRT{":27,"FRAC{":28,"{":29,"^SINGLE":30,"identifier":31,"number":32,"IDENTIFIER":33,"LONGIDENTIFIER":34,"DECIMAL":35,"INTEGER":36,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",8:"=",9:"!=",10:"<=",11:"<",12:">",13:">=",15:",",17:"(",18:")",19:"+",20:"-",21:"*",22:"/",23:"POWER{",24:"}",25:"_{",26:"_SINGLE",27:"SQRT{",28:"FRAC{",29:"{",30:"^SINGLE",33:"IDENTIFIER",34:"LONGIDENTIFIER",35:"DECIMAL",36:"INTEGER"},
productions_: [0,[3,2],[4,1],[4,1],[7,3],[7,3],[7,3],[7,3],[7,3],[7,3],[14,3],[14,3],[16,3],[6,3],[6,3],[6,3],[6,3],[6,4],[6,4],[6,2],[6,3],[6,6],[6,2],[6,2],[6,2],[6,3],[6,1],[6,1],[6,1],[31,1],[31,1],[32,1],[32,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1: return $$[$0-1]; 
break;
case 2:this.$ = $$[$0];
break;
case 3:this.$ = $$[$0];
break;
case 4:this.$ = ['=', $$[$0-2], $$[$0]];
break;
case 5:this.$ = ['!=', $$[$0-2], $$[$0]];
break;
case 6:this.$ = ['<=', $$[$0-2], $$[$0]];
break;
case 7:this.$ = ['<', $$[$0-2], $$[$0]];
break;
case 8:this.$ = ['>', $$[$0-2], $$[$0]];
break;
case 9:this.$ = ['>=', $$[$0-2], $$[$0]];
break;
case 10:this.$ = [',.', $$[$0-2], $$[$0]];
break;
case 11:this.$ = [',', $$[$0-2], $$[$0]];
break;
case 12:this.$ = $$[$0-1];
break;
case 13:this.$ = ['+', $$[$0-2], $$[$0]];
break;
case 14:this.$ = ['-', $$[$0-2], $$[$0]];
break;
case 15:this.$ = ['*', $$[$0-2], $$[$0]];
break;
case 16:this.$ = ['/', $$[$0-2], $$[$0]];
break;
case 17:this.$ = ['^', $$[$0-3], $$[$0-1]];
break;
case 18:this.$ = ['_', $$[$0-3], $$[$0-1]];
break;
case 19:this.$ = ['_', $$[$0-1], {type: 'Single', primitive: yytext.substring(1)}];
break;
case 20:this.$ = ['sqrt', $$[$0-1]];
break;
case 21:this.$ = ['frac', $$[$0-4], $$[$0-1]];
break;
case 22:this.$ = ['^', $$[$0-1], {type: 'Single', primitive: yytext.substring(1)}];
break;
case 23:this.$ = ['@-', $$[$0]]
break;
case 24:this.$ = ['default', $$[$0-1], $$[$0]];
break;
case 25:this.$ = $$[$0-1]
break;
case 26:this.$ = $$[$0];
break;
case 27:this.$ = $$[$0];
break;
case 28:this.$ = $$[$0];
break;
case 29:this.$ = yytext;
break;
case 30:this.$ = yytext.substring(1);
break;
case 31:this.$ = {type: 'Number', primitive: yytext};
break;
case 32:this.$ = {type: 'Number', primitive: yytext};
break;
}
},
table: [{3:1,4:2,6:3,7:4,16:9,17:[1,8],20:[1,7],27:[1,5],28:[1,6],31:10,32:11,33:[1,12],34:[1,13],35:[1,14],36:[1,15]},{1:[3]},{5:[1,16]},{5:[2,2],6:25,8:[1,26],9:[1,27],10:[1,28],11:[1,29],12:[1,30],13:[1,31],16:9,17:[1,8],19:[1,17],20:[1,18],21:[1,19],22:[1,20],23:[1,21],24:[2,2],25:[1,22],26:[1,23],27:[1,5],28:[1,6],30:[1,24],31:10,32:11,33:[1,12],34:[1,13],35:[1,14],36:[1,15]},{5:[2,3],24:[2,3]},{6:32,16:9,17:[1,8],20:[1,7],27:[1,5],28:[1,6],31:10,32:11,33:[1,12],34:[1,13],35:[1,14],36:[1,15]},{6:33,16:9,17:[1,8],20:[1,7],27:[1,5],28:[1,6],31:10,32:11,33:[1,12],34:[1,13],35:[1,14],36:[1,15]},{6:34,16:9,17:[1,8],20:[1,7],27:[1,5],28:[1,6],31:10,32:11,33:[1,12],34:[1,13],35:[1,14],36:[1,15]},{6:35,14:36,16:9,17:[1,8],20:[1,7],27:[1,5],28:[1,6],31:10,32:11,33:[1,12],34:[1,13],35:[1,14],36:[1,15]},{5:[2,26],8:[2,26],9:[2,26],10:[2,26],11:[2,26],12:[2,26],13:[2,26],15:[2,26],17:[2,26],18:[2,26],19:[2,26],20:[2,26],21:[2,26],22:[2,26],23:[2,26],24:[2,26],25:[2,26],26:[2,26],27:[2,26],28:[2,26],30:[2,26],33:[2,26],34:[2,26],35:[2,26],36:[2,26]},{5:[2,27],8:[2,27],9:[2,27],10:[2,27],11:[2,27],12:[2,27],13:[2,27],15:[2,27],17:[2,27],18:[2,27],19:[2,27],20:[2,27],21:[2,27],22:[2,27],23:[2,27],24:[2,27],25:[2,27],26:[2,27],27:[2,27],28:[2,27],30:[2,27],33:[2,27],34:[2,27],35:[2,27],36:[2,27]},{5:[2,28],8:[2,28],9:[2,28],10:[2,28],11:[2,28],12:[2,28],13:[2,28],15:[2,28],17:[2,28],18:[2,28],19:[2,28],20:[2,28],21:[2,28],22:[2,28],23:[2,28],24:[2,28],25:[2,28],26:[2,28],27:[2,28],28:[2,28],30:[2,28],33:[2,28],34:[2,28],35:[2,28],36:[2,28]},{5:[2,29],8:[2,29],9:[2,29],10:[2,29],11:[2,29],12:[2,29],13:[2,29],15:[2,29],17:[2,29],18:[2,29],19:[2,29],20:[2,29],21:[2,29],22:[2,29],23:[2,29],24:[2,29],25:[2,29],26:[2,29],27:[2,29],28:[2,29],30:[2,29],33:[2,29],34:[2,29],35:[2,29],36:[2,29]},{5:[2,30],8:[2,30],9:[2,30],10:[2,30],11:[2,30],12:[2,30],13:[2,30],15:[2,30],17:[2,30],18:[2,30],19:[2,30],20:[2,30],21:[2,30],22:[2,30],23:[2,30],24:[2,30],25:[2,30],26:[2,30],27:[2,30],28:[2,30],30:[2,30],33:[2,30],34:[2,30],35:[2,30],36:[2,30]},{5:[2,31],8:[2,31],9:[2,31],10:[2,31],11:[2,31],12:[2,31],13:[2,31],15:[2,31],17:[2,31],18:[2,31],19:[2,31],20:[2,31],21:[2,31],22:[2,31],23:[2,31],24:[2,31],25:[2,31],26:[2,31],27:[2,31],28:[2,31],30:[2,31],33:[2,31],34:[2,31],35:[2,31],36:[2,31]},{5:[2,32],8:[2,32],9:[2,32],10:[2,32],11:[2,32],12:[2,32],13:[2,32],15:[2,32],17:[2,32],18:[2,32],19:[2,32],20:[2,32],21:[2,32],22:[2,32],23:[2,32],24:[2,32],25:[2,32],26:[2,32],27:[2,32],28:[2,32],30:[2,32],33:[2,32],34:[2,32],35:[2,32],36:[2,32]},{1:[2,1]},{6:37,16:9,17:[1,8],20:[1,7],27:[1,5],28:[1,6],31:10,32:11,33:[1,12],34:[1,13],35:[1,14],36:[1,15]},{6:38,16:9,17:[1,8],20:[1,7],27:[1,5],28:[1,6],31:10,32:11,33:[1,12],34:[1,13],35:[1,14],36:[1,15]},{6:39,16:9,17:[1,8],20:[1,7],27:[1,5],28:[1,6],31:10,32:11,33:[1,12],34:[1,13],35:[1,14],36:[1,15]},{6:40,16:9,17:[1,8],20:[1,7],27:[1,5],28:[1,6],31:10,32:11,33:[1,12],34:[1,13],35:[1,14],36:[1,15]},{6:41,16:9,17:[1,8],20:[1,7],27:[1,5],28:[1,6],31:10,32:11,33:[1,12],34:[1,13],35:[1,14],36:[1,15]},{4:42,6:3,7:4,16:9,17:[1,8],20:[1,7],27:[1,5],28:[1,6],31:10,32:11,33:[1,12],34:[1,13],35:[1,14],36:[1,15]},{5:[2,19],8:[2,19],9:[2,19],10:[2,19],11:[2,19],12:[2,19],13:[2,19],15:[2,19],17:[2,19],18:[2,19],19:[2,19],20:[2,19],21:[2,19],22:[2,19],23:[2,19],24:[2,19],25:[2,19],26:[2,19],27:[2,19],28:[2,19],30:[2,19],33:[2,19],34:[2,19],35:[2,19],36:[2,19]},{5:[2,22],8:[2,22],9:[2,22],10:[2,22],11:[2,22],12:[2,22],13:[2,22],15:[2,22],17:[2,22],18:[2,22],19:[2,22],20:[2,22],21:[2,22],22:[2,22],23:[2,22],24:[2,22],25:[2,22],26:[2,22],27:[2,22],28:[2,22],30:[2,22],33:[2,22],34:[2,22],35:[2,22],36:[2,22]},{5:[2,24],6:25,8:[2,24],9:[2,24],10:[2,24],11:[2,24],12:[2,24],13:[2,24],15:[2,24],16:9,17:[1,8],18:[2,24],19:[2,24],20:[2,24],21:[2,24],22:[2,24],23:[1,21],24:[2,24],25:[2,24],26:[2,24],27:[2,24],28:[2,24],30:[1,24],31:10,32:11,33:[1,12],34:[1,13],35:[1,14],36:[1,15]},{6:43,16:9,17:[1,8],20:[1,7],27:[1,5],28:[1,6],31:10,32:11,33:[1,12],34:[1,13],35:[1,14],36:[1,15]},{6:44,16:9,17:[1,8],20:[1,7],27:[1,5],28:[1,6],31:10,32:11,33:[1,12],34:[1,13],35:[1,14],36:[1,15]},{6:45,16:9,17:[1,8],20:[1,7],27:[1,5],28:[1,6],31:10,32:11,33:[1,12],34:[1,13],35:[1,14],36:[1,15]},{6:46,16:9,17:[1,8],20:[1,7],27:[1,5],28:[1,6],31:10,32:11,33:[1,12],34:[1,13],35:[1,14],36:[1,15]},{6:47,16:9,17:[1,8],20:[1,7],27:[1,5],28:[1,6],31:10,32:11,33:[1,12],34:[1,13],35:[1,14],36:[1,15]},{6:48,16:9,17:[1,8],20:[1,7],27:[1,5],28:[1,6],31:10,32:11,33:[1,12],34:[1,13],35:[1,14],36:[1,15]},{6:25,16:9,17:[1,8],19:[1,17],20:[1,18],21:[1,19],22:[1,20],23:[1,21],24:[1,49],25:[1,22],26:[1,23],27:[1,5],28:[1,6],30:[1,24],31:10,32:11,33:[1,12],34:[1,13],35:[1,14],36:[1,15]},{6:25,16:9,17:[1,8],19:[1,17],20:[1,18],21:[1,19],22:[1,20],23:[1,21],24:[1,50],25:[1,22],26:[1,23],27:[1,5],28:[1,6],30:[1,24],31:10,32:11,33:[1,12],34:[1,13],35:[1,14],36:[1,15]},{5:[2,23],6:25,8:[2,23],9:[2,23],10:[2,23],11:[2,23],12:[2,23],13:[2,23],15:[2,23],16:9,17:[1,8],18:[2,23],19:[2,23],20:[2,23],21:[2,23],22:[2,23],23:[1,21],24:[2,23],25:[2,23],26:[2,23],27:[1,5],28:[1,6],30:[1,24],31:10,32:11,33:[1,12],34:[1,13],35:[1,14],36:[1,15]},{6:25,15:[1,52],16:9,17:[1,8],18:[1,51],19:[1,17],20:[1,18],21:[1,19],22:[1,20],23:[1,21],25:[1,22],26:[1,23],27:[1,5],28:[1,6],30:[1,24],31:10,32:11,33:[1,12],34:[1,13],35:[1,14],36:[1,15]},{15:[1,54],18:[1,53]},{5:[2,13],6:25,8:[2,13],9:[2,13],10:[2,13],11:[2,13],12:[2,13],13:[2,13],15:[2,13],16:9,17:[1,8],18:[2,13],19:[2,13],20:[2,13],21:[1,19],22:[1,20],23:[1,21],24:[2,13],25:[2,13],26:[2,13],27:[1,5],28:[1,6],30:[1,24],31:10,32:11,33:[1,12],34:[1,13],35:[1,14],36:[1,15]},{5:[2,14],6:25,8:[2,14],9:[2,14],10:[2,14],11:[2,14],12:[2,14],13:[2,14],15:[2,14],16:9,17:[1,8],18:[2,14],19:[2,14],20:[2,14],21:[2,23],22:[2,23],23:[1,21],24:[2,14],25:[2,14],26:[2,14],27:[1,5],28:[1,6],30:[1,24],31:10,32:11,33:[1,12],34:[1,13],35:[1,14],36:[1,15]},{5:[2,15],6:25,8:[2,15],9:[2,15],10:[2,15],11:[2,15],12:[2,15],13:[2,15],15:[2,15],16:9,17:[1,8],18:[2,15],19:[2,15],20:[2,15],21:[2,15],22:[2,15],23:[1,21],24:[2,15],25:[2,15],26:[2,15],27:[1,5],28:[1,6],30:[1,24],31:10,32:11,33:[1,12],34:[1,13],35:[1,14],36:[1,15]},{5:[2,16],6:25,8:[2,16],9:[2,16],10:[2,16],11:[2,16],12:[2,16],13:[2,16],15:[2,16],16:9,17:[1,8],18:[2,16],19:[2,16],20:[2,16],21:[2,16],22:[2,16],23:[1,21],24:[2,16],25:[2,16],26:[2,16],27:[1,5],28:[1,6],30:[1,24],31:10,32:11,33:[1,12],34:[1,13],35:[1,14],36:[1,15]},{6:25,16:9,17:[1,8],19:[1,17],20:[1,18],21:[1,19],22:[1,20],23:[1,21],24:[1,55],25:[1,22],26:[1,23],27:[1,5],28:[1,6],30:[1,24],31:10,32:11,33:[1,12],34:[1,13],35:[1,14],36:[1,15]},{24:[1,56]},{5:[2,4],6:25,16:9,17:[1,8],19:[1,17],20:[1,18],21:[1,19],22:[1,20],23:[1,21],24:[2,4],25:[1,22],26:[1,23],27:[1,5],28:[1,6],30:[1,24],31:10,32:11,33:[1,12],34:[1,13],35:[1,14],36:[1,15]},{5:[2,5],6:25,16:9,17:[1,8],19:[1,17],20:[1,18],21:[1,19],22:[1,20],23:[1,21],24:[2,5],25:[1,22],26:[1,23],27:[1,5],28:[1,6],30:[1,24],31:10,32:11,33:[1,12],34:[1,13],35:[1,14],36:[1,15]},{5:[2,6],6:25,16:9,17:[1,8],19:[1,17],20:[1,18],21:[1,19],22:[1,20],23:[1,21],24:[2,6],25:[1,22],26:[1,23],27:[1,5],28:[1,6],30:[1,24],31:10,32:11,33:[1,12],34:[1,13],35:[1,14],36:[1,15]},{5:[2,7],6:25,16:9,17:[1,8],19:[1,17],20:[1,18],21:[1,19],22:[1,20],23:[1,21],24:[2,7],25:[1,22],26:[1,23],27:[1,5],28:[1,6],30:[1,24],31:10,32:11,33:[1,12],34:[1,13],35:[1,14],36:[1,15]},{5:[2,8],6:25,16:9,17:[1,8],19:[1,17],20:[1,18],21:[1,19],22:[1,20],23:[1,21],24:[2,8],25:[1,22],26:[1,23],27:[1,5],28:[1,6],30:[1,24],31:10,32:11,33:[1,12],34:[1,13],35:[1,14],36:[1,15]},{5:[2,9],6:25,16:9,17:[1,8],19:[1,17],20:[1,18],21:[1,19],22:[1,20],23:[1,21],24:[2,9],25:[1,22],26:[1,23],27:[1,5],28:[1,6],30:[1,24],31:10,32:11,33:[1,12],34:[1,13],35:[1,14],36:[1,15]},{5:[2,20],8:[2,20],9:[2,20],10:[2,20],11:[2,20],12:[2,20],13:[2,20],15:[2,20],17:[2,20],18:[2,20],19:[2,20],20:[2,20],21:[2,20],22:[2,20],23:[2,20],24:[2,20],25:[2,20],26:[2,20],27:[2,20],28:[2,20],30:[2,20],33:[2,20],34:[2,20],35:[2,20],36:[2,20]},{29:[1,57]},{5:[2,25],8:[2,25],9:[2,25],10:[2,25],11:[2,25],12:[2,25],13:[2,25],15:[2,25],17:[2,25],18:[2,25],19:[2,25],20:[2,25],21:[2,25],22:[2,25],23:[2,25],24:[2,25],25:[2,25],26:[2,25],27:[2,25],28:[2,25],30:[2,25],33:[2,25],34:[2,25],35:[2,25],36:[2,25]},{6:58,16:9,17:[1,8],20:[1,7],27:[1,5],28:[1,6],31:10,32:11,33:[1,12],34:[1,13],35:[1,14],36:[1,15]},{5:[2,12],8:[2,12],9:[2,12],10:[2,12],11:[2,12],12:[2,12],13:[2,12],15:[2,12],17:[2,12],18:[2,12],19:[2,12],20:[2,12],21:[2,12],22:[2,12],23:[2,12],24:[2,12],25:[2,12],26:[2,12],27:[2,12],28:[2,12],30:[2,12],33:[2,12],34:[2,12],35:[2,12],36:[2,12]},{6:59,16:9,17:[1,8],20:[1,7],27:[1,5],28:[1,6],31:10,32:11,33:[1,12],34:[1,13],35:[1,14],36:[1,15]},{5:[2,17],8:[2,17],9:[2,17],10:[2,17],11:[2,17],12:[2,17],13:[2,17],15:[2,17],17:[2,17],18:[2,17],19:[2,17],20:[2,17],21:[2,17],22:[2,17],23:[2,17],24:[2,17],25:[2,17],26:[2,17],27:[2,17],28:[2,17],30:[2,17],33:[2,17],34:[2,17],35:[2,17],36:[2,17]},{5:[2,18],8:[2,18],9:[2,18],10:[2,18],11:[2,18],12:[2,18],13:[2,18],15:[2,18],17:[2,18],18:[2,18],19:[2,18],20:[2,18],21:[2,18],22:[2,18],23:[2,18],24:[2,18],25:[2,18],26:[2,18],27:[2,18],28:[2,18],30:[2,18],33:[2,18],34:[2,18],35:[2,18],36:[2,18]},{6:60,16:9,17:[1,8],20:[1,7],27:[1,5],28:[1,6],31:10,32:11,33:[1,12],34:[1,13],35:[1,14],36:[1,15]},{6:25,15:[2,11],16:9,17:[1,8],18:[2,11],19:[1,17],20:[1,18],21:[1,19],22:[1,20],23:[1,21],25:[1,22],26:[1,23],27:[1,5],28:[1,6],30:[1,24],31:10,32:11,33:[1,12],34:[1,13],35:[1,14],36:[1,15]},{6:25,15:[2,10],16:9,17:[1,8],18:[2,10],19:[1,17],20:[1,18],21:[1,19],22:[1,20],23:[1,21],25:[1,22],26:[1,23],27:[1,5],28:[1,6],30:[1,24],31:10,32:11,33:[1,12],34:[1,13],35:[1,14],36:[1,15]},{6:25,16:9,17:[1,8],19:[1,17],20:[1,18],21:[1,19],22:[1,20],23:[1,21],24:[1,61],25:[1,22],26:[1,23],27:[1,5],28:[1,6],30:[1,24],31:10,32:11,33:[1,12],34:[1,13],35:[1,14],36:[1,15]},{5:[2,21],8:[2,21],9:[2,21],10:[2,21],11:[2,21],12:[2,21],13:[2,21],15:[2,21],17:[2,21],18:[2,21],19:[2,21],20:[2,21],21:[2,21],22:[2,21],23:[2,21],24:[2,21],25:[2,21],26:[2,21],27:[2,21],28:[2,21],30:[2,21],33:[2,21],34:[2,21],35:[2,21],36:[2,21]}],
defaultActions: {16:[2,1]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == 'undefined') {
        this.lexer.yylloc = {};
    }
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === 'function') {
        this.parseError = this.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || EOF;
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + this.lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: this.lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: this.lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
undefined/* generated by jison-lex 0.2.1 */
var lexer = (function(){
var lexer = {

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input) {
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:return 'TEXT'
break;
case 2:return 17
break;
case 3:return 18
break;
case 4:return 28
break;
case 5:return 27
break;
case 6:return 21
break;
case 7:return 10
break;
case 8:return 13
break;
case 9:return 'NE'
break;
case 10:return 34
break;
case 11:return 33
break;
case 12:return 35
break;
case 13:return 36
break;
case 14:return 8
break;
case 15:return 21
break;
case 16:return 21
break;
case 17:return 22
break;
case 18:return 20
break;
case 19:return 19
break;
case 20:return 10
break;
case 21:return 13
break;
case 22:return 11
break;
case 23:return 12
break;
case 24:return 9
break;
case 25:return '&&'
break;
case 26:return 26
break;
case 27:return 30
break;
case 28:return 25
break;
case 29:return 23
break;
case 30:return '!'
break;
case 31:return '%'
break;
case 32:return 15
break;
case 33:return '?'
break;
case 34:return ':'
break;
case 35:return 17
break;
case 36:return 18
break;
case 37:return 29
break;
case 38:return 24
break;
case 39:return '['
break;
case 40:return ']'
break;
case 41:return 5
break;
}
},
rules: [/^(?:\s+)/,/^(?:\$[^\$]*\$)/,/^(?:\\left\()/,/^(?:\\right\))/,/^(?:\\frac\{)/,/^(?:\\sqrt\{)/,/^(?:\\cdot\b)/,/^(?:\\l[e])/,/^(?:\\g[e])/,/^(?:\\n[e])/,/^(?:\\[a-zA-Z]+)/,/^(?:[a-zA-Z])/,/^(?:[0-9]+\.[0-9]*)/,/^(?:[0-9]+)/,/^(?:=)/,/^(?:\*)/,/^(?:\.)/,/^(?:\/)/,/^(?:-)/,/^(?:\+)/,/^(?:<=)/,/^(?:>=)/,/^(?:<)/,/^(?:>)/,/^(?:!=)/,/^(?:&&)/,/^(?:_[^\(\{])/,/^(?:\^[^\(\{])/,/^(?:_\{)/,/^(?:\^\{)/,/^(?:!)/,/^(?:%)/,/^(?:,)/,/^(?:\?)/,/^(?::)/,/^(?:\()/,/^(?:\))/,/^(?:\{)/,/^(?:\})/,/^(?:\[)/,/^(?:\])/,/^(?:$)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41],"inclusive":true}}
};
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = parser;
exports.Parser = parser.Parser;
exports.parse = function () { return parser.parse.apply(parser, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}