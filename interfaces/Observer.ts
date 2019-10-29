export default interface Observer<T> {
    update(parameter: T):void;
}