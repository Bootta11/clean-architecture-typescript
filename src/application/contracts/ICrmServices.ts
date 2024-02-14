import IProjectDependency from './IProjectDependency.js';

export default interface ICrmServices extends IProjectDependency {
    notify(_studentDetails): Promise<unknown>;
};
