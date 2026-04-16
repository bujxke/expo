"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerDocumentContext = void 0;
exports.useServerDocumentContext = useServerDocumentContext;
exports.ServerDocument = ServerDocument;
const react_1 = __importDefault(require("react"));
const EMPTY_DOCUMENT = {};
exports.ServerDocumentContext = react_1.default.createContext(EMPTY_DOCUMENT);
function useServerDocumentContext() {
    return react_1.default.useContext(exports.ServerDocumentContext);
}
function ServerDocument({ children, value, }) {
    return <exports.ServerDocumentContext value={value}>{children}</exports.ServerDocumentContext>;
}
