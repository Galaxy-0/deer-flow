// Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
// SPDX-License-Identifier: MIT

import Link from "next/link";

export function Logo() {
  return (
    <Link
      className="opacity-70 transition-opacity duration-300 hover:opacity-100"
      href="/"
    >
      <div className="flex items-center gap-2">
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
        <span>WisdomFlow</span>
      </div>
    </Link>
  );
}
