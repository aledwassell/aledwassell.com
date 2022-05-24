import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  link: {}
};

const pluralNames = {link: 'links'  };

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames
};
