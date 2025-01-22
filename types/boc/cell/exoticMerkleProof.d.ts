/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { BitString } from "../BitString";
import { Cell } from "../Cell";
export declare function exoticMerkleProof(bits: BitString, refs: Cell[]): {
    proofDepth: number;
    proofHash: Buffer<ArrayBufferLike>;
};
export declare function convertToMerkleProof(c: Cell): Cell;
