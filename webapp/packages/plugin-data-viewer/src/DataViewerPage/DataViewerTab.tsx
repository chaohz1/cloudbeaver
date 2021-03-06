/*
 * cloudbeaver - Cloud Database Manager
 * Copyright (C) 2020 DBeaver Corp and others
 *
 * Licensed under the Apache License, Version 2.0.
 * you may not use this file except in compliance with the License.
 */

import { observer } from 'mobx-react';
import styled from 'reshadow';

import { NavNodeManagerService } from '@cloudbeaver/core-app';
import { TabIcon, Tab, TabTitle } from '@cloudbeaver/core-blocks';
import { useService } from '@cloudbeaver/core-di';
import { useStyles } from '@cloudbeaver/core-theming';
import { ObjectPageTabProps } from '@cloudbeaver/plugin-object-viewer';

export const DataViewerTab = observer(function DataViewerTab({
  tab, page, onSelect, style,
}: ObjectPageTabProps) {
  const navNodeManagerService = useService(NavNodeManagerService);

  if (!navNodeManagerService.isNodeHasData(tab.handlerState.objectId)) {
    return null;
  }

  return styled(useStyles(...style))(
    <Tab tabId={page.key} onOpen={onSelect} >
      <TabIcon icon='/icons/grid.png' />
      <TabTitle>Data</TabTitle>
    </Tab>
  );
});
