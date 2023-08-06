"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[5998],{5998:(e,r,o)=>{o.d(r,{FR:()=>Ee,OY:()=>ke,sG:()=>me,ic:()=>he,sB:()=>ye});var n=o(96486),t=o.n(n),a=o(97880),s=o(5366);const c=o(85).r3G,i=o(85).ohA,u=o(85).xSd,l=o(85).cZP,f=o(85).vM5,d=o(85).V87,p=o(85).cxc,m=o(85).zG2,y=o(85).blL,h=o(85).U2N,k=o(85).fSf,E=o(85).B4J,T=o(85).SvT,b=o(85).pmH,g=o(85).V5b,x=o(85).n19,C=o(85).NQT,O=o(85).dQj,N=o(85).dHo,F=o(85).fuO,P=o(85).RDm,v=o(85).Rii,w=o(85).H8L,M=o(85).nx5,D=(0,s.defineMessages)({InvalidCharacter:{[M]:'Invalid character "{errorCharacter}"',id:"formulas.formulaParseError.invalidCharacter"},[w]:{[M]:"Unclosed string literal",id:"formulas.formulaParseError.unclosedStringLiteral"},UnclosedComment:{[M]:"Unclosed comment. Comments must be closed with a */ sequence",id:"formulas.formulaParseError.unclosedComment"},TokenExpected:{[M]:'Expected token "{expectedToken}"',id:"formulas.formulaParseError.tokenExpected"},StringLiteralContainsToken:{[M]:"String literal contains token",id:"formulas.formulaParseError.stringLiteralContainsToken"},ExpressionExpected:{[M]:"Expression expected",id:"formulas.formulaParseError.expressionExpected"},PropertyExpected:{[M]:"Property token or function expected",id:"formulas.formulaParseError.propertyExpected"},EndOfInputExpected:{[M]:"End of input expected",id:"formulas.formulaParseError.endOfInputExpected"},[v]:{[M]:"Unexpected error",id:"formulas.formulaParseError.unexpectedError"}}),I=(0,s.defineMessages)({ThisRowTypeNotFound:{[M]:"Cannot find this row in context [{startOffset}, {endOffset}]",id:"formulas.formulaTypecheckerError.thisRowTypeNotFound"},[P]:{[M]:"This row is not a block with a collection [{startOffset}, {endOffset}]",id:"formulas.formulaTypecheckerError.thisRowNotBlockWithCollection"},MissingPropertyOnThisRow:{[M]:"Cannot find property {propertyName} on this row [{startOffset}, {endOffset}]",id:"formulas.formulaTypecheckerError.missingPropertyOnThisRow"},[F]:{[M]:"Cannot find context variable {valueId} [{startOffset}, {endOffset}]",id:"formulas.formulaTypecheckerError.missingContextVariable"},MissingBlock:{[M]:"Could not find block {blockId} [{startOffset}, {endOffset}]",id:"formulas.formulaTypecheckerError.missingBlock"},[N]:{[M]:"Trying to access user property {userProperty} on non-user [{startOffset}, {endOffset}]",id:"formulas.formulaTypecheckerError.nonMemberUserProperty"},CallingNotFunction:{[M]:"Cannot call expression of type {expressionType} [{startOffset}, {endOffset}]",id:"formulas.formulaTypecheckerError.callingNotFunction"},[O]:{[M]:"Function {functionName} expects {minNumParameters} arguments, but only {numArguments} were provided [{startOffset}, {endOffset}]",id:"formulas.formulaTypecheckerError.functionCallTooFewArguments"},[C]:{[M]:"Function {functionName} received unexpected argument [{startOffset}, {endOffset}]",id:"formulas.formulaTypecheckerError.functionCallUnexpectedArgument"},[x]:{[M]:"Argument of type {argumentType} does not satisfy function {functionName} [{startOffset}, {endOffset}]",id:"formulas.formulaTypecheckerError.functionCallArgumentWrongType"},[g]:{[M]:"Token {propertyName} does not match block's collection [{startOffset}, {endOffset}]",id:"formulas.formulaTypecheckerError.memberPropertyMismatchCollection"},MemberPropertyMissing:{[M]:"Cannot find property {propertyName} on collection [{startOffset}, {endOffset}]",id:"formulas.formulaTypecheckerError.memberPropertyMissing"},[b]:{[M]:"Cannot access property on non-block [{startOffset}, {endOffset}]",id:"formulas.formulaTypecheckerError.memberPropertyTargetNotBlock"},[T]:{[M]:"Cannot access property of type button [{startOffset}, {endOffset}]",id:"formulas.formulaTypecheckerError.memberPropertyButtonType"},[E]:{[M]:"Cannot access user property {userProperty} on non-person [{startOffset}, {endOffset}]",id:"formulas.formulaTypecheckerError.memberUserPropertyTargetNotPerson"},UndefinedIdentifier:{[M]:"{identifier} is not defined [{startOffset}, {endOffset}]",id:"formulas.formulaTypecheckerError.undefinedIdentifier"},IdentifierExpected:{[M]:"Expected identifier. [{startOffset}, {endOffset}]",id:"formulas.formulaTypecheckerError.identifierExpected"},[k]:{[M]:"Cannot find function {functionName} [{startOffset}, {endOffset}]",id:"formulas.formulaTypecheckerError.unifiedFunctionCannotFindFunction"},UnifiedFunctionNoArguments:{[M]:"Function {functionName} does not expect any arguments [{startOffset}, {endOffset}]",id:"formulas.formulaTypecheckerError.unifiedFunctionNoArguments"},[h]:{[M]:"Cannot call {functionName} with target of type {targetType} [{startOffset}, {endOffset}]",id:"formulas.formulaTypecheckerError.unifiedFunctionTargetWrongType"},[y]:{[M]:"Cannot compare {lhsType} and {rhsType} [{startOffset}, {endOffset}]",id:"formulas.formulaTypecheckerError.cannotRelativelyCompareTypes"},[m]:{[M]:"Cannot do math on {lhsType} and {rhsType} [{startOffset}, {endOffset}]",id:"formulas.formulaTypecheckerError.cannotDoMathOnType"},[p]:{[M]:"Cannot apply minus to {type} [{startOffset}, {endOffset}]",id:"formulas.formulaTypecheckerError.unaryMinusOnNonNumber"},CircularDependency:{[M]:"Circular dependency detected, this formula references itself. [{startOffset}, {endOffset}]",id:"formulas.formulaTypecheckerError.circularDependency"},PropNotSupported:{id:"formulas.formulaEvaluatorError.propNotSupported",[M]:"The prop() function is no longer supported. Please reference property names directly."}}),R=(0,s.defineMessages)({MissingThisRow:{[M]:"Cannot not find this row",id:"formulas.formulaEvaluatorError.missingThisRow"},[d]:{[M]:'Missing property "{propertyName}" on this row',id:"formulas.formulaEvaluatorError.missingSchemaPropertyOnThisRow"},[f]:{[M]:"This row property has different collection",id:"formulas.formulaEvaluatorError.thisRowBlockPropertyMismatchCollection"},[F]:{[M]:'Missing context variable "{valueId}"',id:"formulas.formulaEvaluatorError.missingContextVariable"},[N]:{[M]:"Cannot access user property on this row",id:"formulas.formulaEvaluatorError.nonMemberUserProperty"},IdentifierNotFound:{[M]:'"{identifier}" is not defined',id:"formulas.formulaEvaluatorError.identifierNotFound"},[y]:{[M]:'Cannot compare "{lhsType}" and "{rhsType}"',id:"formulas.formulaEvaluatorError.cannotRelativelyCompareTypes"},[m]:{[M]:'Cannot do math on type "{valueType}"',id:"formulas.formulaEvaluatorError.cannotDoMathOnType"},CannotCallNonFunction:{[M]:'Cannot call type "{calleeType}"',id:"formulas.formulaEvaluatorError.cannotCallNonFunction"},[l]:{[M]:'Function "{functionName}" not found',id:"formulas.formulaEvaluatorError.unifiedFunctionPropertyNotFound"},[u]:{[M]:'Error occurred while calling "{functionName}"',id:"formulas.formulaEvaluatorError.libraryFunctionExecutionError"},[O]:{[M]:'Called "{functionName}" with too few arguments',id:"formulas.formulaEvaluatorError.functionCallTooFewArguments"},[C]:{[M]:'Called "{functionName}" with unexpected argument',id:"formulas.formulaEvaluatorError.functionCallUnexpectedArgument"},[x]:{[M]:'Called "{functionName}" with wrong argument type "{argumentType}"',id:"formulas.formulaEvaluatorError.functionCallArgumentWrongType"},AccessingPropertyOnNonBlock:{[M]:"Target object is not a block",id:"formulas.formulaEvaluatorError.accessingPropertyOnNonBlock"},[i]:{[M]:"Target object is not a person",id:"formulas.formulaEvaluatorError.accessingUserPropertyOnNonPerson"},MissingDataDependencyBlock:{[M]:'Cannot find target block "{blockId}"',id:"formulas.formulaEvaluatorError.missingDataDependencyBlock"},MissingDataDependencyPerson:{[M]:'Cannot find target person "{personId}"',id:"formulas.formulaEvaluatorError.missingDataDependencyPerson"},[g]:{[M]:"Cannot access property of a different collection",id:"formulas.formulaEvaluatorError.memberPropertyMismatchCollection"},[c]:{[M]:"Cannot find property on collection",id:"formulas.formulaEvaluatorError.missingPropertyOnSchemaForMemberProperty"},[p]:{[M]:'Cannot negate value of type "{expressionType}"',id:"formulas.formulaEvaluatorError.unaryMinusOnNonNumber"},UnexpectedRecoveryNode:{[M]:"Unexpected recovery node",id:"formulas.formulaEvaluatorError.unexpectedRecoveryNode"},[v]:{[M]:"Unexpected error",id:"formulas.formulaEvaluatorError.unexpectedError"},DepthExceeded:{[M]:"Maximum recursion depth exceeded",id:"formulas.formulaEvaluatorError.depthExceeded"},CycleDetected:{[M]:"Cycle detected in formula",id:"formulas.formulaEvaluatorError.cycleDetected"}});var Y=o(47218),U=o(78106);const A=o(85).r3G,B=o(85).ohA,S=o(85).xSd,$=o(85).cZP,L=o(85).vM5,G=o(85).V87,H=o(85).g$6,V=o(85).Mmq,z=o(85).cxc,j=o(85).zG2,Q=o(85).blL,W=o(85).U2N,q=o(85).fSf,_=o(85).B4J,J=o(85).SvT,Z=o(85).pmH,K=o(85).V5b,X=o(85).hqk,ee=o(85).bcz,re=o(85).dQj,oe=o(85).dHo,ne=o(85).fuO,te=o(85).ffk,ae=o(85)._tz,se=o(85).RDm,ce=o(85).NQT,ie=o(85).n19,ue=o(85).Rii,le=o(85).H8L,fe=o(85).Gpy,de=o(85).wbz;function pe(e){switch(e){case"checkbox":return"boolean";case"number":return"number";case"text":return"text";case"date":return"date";case"array":return"array";case"block":return"block";case"person":return"person";case"select":return"select";case"function":return"function";case"unknown":return"unknown";case de:return de;default:(0,a.unreachable)(e)}}function me(e){switch(e.type){case Y.$E.InvalidCharacter:return{...D.InvalidCharacter,[fe]:{errorCharacter:e.character}};case Y.$E[le]:return D[le];case Y.$E.UnclosedComment:return D.UnclosedComment;case Y.$E.TokenExpected:return{...D.TokenExpected,[fe]:{expectedToken:e.token}};case Y.$E.StringLiteralContainsToken:return D.StringLiteralContainsToken;case Y.$E.ExpressionExpected:return D.ExpressionExpected;case Y.$E.PropertyTokenOrFunctionExpected:return D.PropertyExpected;case Y.$E.EndOfInputExpected:return D.EndOfInputExpected;case Y.$E[ue]:return D[ue];default:(0,a.unreachable)(e)}}function ye(e){switch(e.type){case Y.h4[ie]:case Y.h4[ce]:return e.argument;default:return e.node}}function he(e){let r;switch(e.type){case Y.h4.ThisRowTypeNotFound:r=I.ThisRowTypeNotFound;break;case Y.h4[se]:r=I[se];break;case Y.h4.MissingPropertyOnThisRow:r={...I.MissingPropertyOnThisRow,[fe]:{[ae]:e.token[te]}};break;case Y.h4[ne]:r={...I[ne],[fe]:{valueId:e.token.valueId}};break;case Y.h4.MissingBlock:r={...I.MissingBlock,[fe]:{blockId:e.token.blockId}};break;case Y.h4[oe]:r={...I[oe],[fe]:{userProperty:e.token.userProperty}};break;case Y.h4.CallingNotFunction:r={...I.CallingNotFunction,[fe]:{expressionType:pe(e.callee.type.type)}};break;case Y.h4[re]:r={...I[re],[fe]:{minNumParameters:e.minNumParameters,[ee]:e[X].name,numArguments:e.numArguments}};break;case Y.h4[ce]:r={...I[ce],[fe]:{[ee]:e[X].name}};break;case Y.h4[ie]:r={...I[ie],[fe]:{argumentType:pe(e.argument.type.type),[ee]:e[X].name}};break;case Y.h4[K]:r={...I[K],[fe]:{[ae]:e.token[te]}};break;case Y.h4.MemberPropertyMissing:r={...I.MemberPropertyMissing,[fe]:{[ae]:e.token[te]}};break;case Y.h4[Z]:r=I[Z];break;case Y.h4[J]:r=I[J];break;case Y.h4[_]:r={...I[_],[fe]:{userProperty:e.node.userProperty}};break;case Y.h4.UndefinedIdentifier:r={...I.UndefinedIdentifier,[fe]:{identifier:e.node.text}};break;case Y.h4[q]:r={...I[q],[fe]:{[ee]:e.name}};break;case Y.h4.UnifiedFunctionNoArguments:r={...I.UnifiedFunctionNoArguments,[fe]:{[ee]:e[X].name}};break;case Y.h4[W]:r={...I[W],[fe]:{[ee]:e[X].name,targetType:pe(e.expression.type.type)}};break;case Y.h4[Q]:r={...I[Q],[fe]:{lhsType:pe(e.lhsType.type),rhsType:pe(e.rhsType.type)}};break;case Y.h4[j]:r={...I[j],[fe]:{lhsType:pe(e.lhsType.type),rhsType:pe(e.rhsType.type)}};break;case Y.h4[z]:r={...I[z],[fe]:{type:pe(e.expression.type.type)}};break;case Y.h4.CircularDependency:r=I.CircularDependency;break;case Y.h4.PropNotSupported:r=I.PropNotSupported;break;case Y.h4.IdentifierExpected:r=I.IdentifierExpected;break;default:(0,a.unreachable)(e)}return{...r,[fe]:{...r[fe],[V]:e.node[V],[H]:e.node[H]+1}}}function ke(e){let r;switch(e.type){case Y.FY.MissingThisRow:r=R.MissingThisRow;break;case Y.FY[G]:r={...R[G],[fe]:{[ae]:e[te]}};break;case Y.FY[L]:r=R[L];break;case Y.FY[ne]:r={...R[ne],[fe]:{valueId:e.valueId}};break;case Y.FY[oe]:r=R[oe];break;case Y.FY.IdentifierNotFound:r={...R.IdentifierNotFound,[fe]:{identifier:e.node.text}};break;case Y.FY[Q]:r={...R[Q],[fe]:{lhsType:pe(e.lhsType),rhsType:pe(e.rhsType)}};break;case Y.FY[j]:r={...R[j],[fe]:{valueType:pe(e.valueType)}};break;case Y.FY.CannotCallNonFunction:r={...R.CannotCallNonFunction,[fe]:{calleeType:pe(e.calleeType)}};break;case Y.FY[$]:r={...R[$],[fe]:{[ee]:e.node.name}};break;case Y.FY[S]:r={...R[S],[fe]:{[ee]:e[X].name}};break;case Y.FY[re]:r={...R[re],[fe]:{[ee]:e[X].name}};break;case Y.FY[ce]:r={...R[ce],[fe]:{[ee]:e[X].name}};break;case Y.FY[ie]:r={...R[ie],[fe]:{[ee]:e[X].name,argumentType:pe(e.argumentType)}};break;case Y.FY.AccessingPropertyOnNonBlock:r=R.AccessingPropertyOnNonBlock;break;case Y.FY[B]:r=R[B];break;case Y.FY.MissingDataDependencyBlock:r={...R.MissingDataDependencyBlock,[fe]:{blockId:e.blockPointer.id}};break;case Y.FY.MissingDataDependencyPerson:r={...R.MissingDataDependencyPerson,[fe]:{personId:e.personPointer.id}};break;case Y.FY[K]:r=R[K];break;case Y.FY[A]:r=R[A];break;case Y.FY[z]:r={...R[z],[fe]:{expressionType:pe(e.expressionType)}};break;case Y.FY.UnexpectedRecoveryNode:r=R.UnexpectedRecoveryNode;break;case Y.FY[ue]:r=R[ue];break;case Y.FY.DepthExceeded:r=R.DepthExceeded;break;case Y.FY.CycleDetected:r=R.CycleDetected;break;default:(0,a.unreachable)(e)}return(0,U.w7)(e)?{...r,[fe]:{...r[fe],[V]:e.node[V],[H]:e.node[H]+1}}:r}function Ee(e){const r=null==e?void 0:e[fe];return[t().omit(e,fe),r]}}}]);