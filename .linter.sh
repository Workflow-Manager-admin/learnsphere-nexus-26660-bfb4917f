#!/bin/bash
cd /home/kavia/workspace/code-generation/learnsphere-nexus-26660-bfb4917f/learnsphere_nexus
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

