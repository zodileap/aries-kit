#!/bin/bash

# 简化部署脚本
set -e

# 配置
SSH_HOST="k8s-main"  # 修改为你的SSH主机
REMOTE_PATH="/opt/web/doc"
LOCAL_BUILD_DIR="preview-dist"

echo "开始构建preview项目..."
# 检查当前目录，如果已经在根目录则不需要cd
if [ -f "preview/deploy.sh" ]; then
    # 已经在根目录
    pnpm build:preview
else
    # 在preview目录，需要返回上级
    cd ..
    pnpm build:preview
fi

echo "构建完成，开始部署到服务器..."
rsync -avz --delete $LOCAL_BUILD_DIR/ $SSH_HOST:$REMOTE_PATH/

echo "部署完成!"