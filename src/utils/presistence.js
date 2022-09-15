import Config from 'conf';

const conf = new Config();

const retrieve = (key, defaultValue) => conf.get(key) ?? defaultValue;

const save = (key, value) => conf.set(key, value);

export { retrieve, save };
