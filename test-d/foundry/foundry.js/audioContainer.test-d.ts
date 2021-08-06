import { expectType } from 'tsd';

const audioContainer = new AudioContainer('a/path/to/some/sound/file.ogg');
expectType<AudioContainer>(audioContainer);
expectType<string>(audioContainer.src);
expectType<AudioBufferSourceNode | MediaElementAudioSourceNode | undefined>(audioContainer.sourceNode);
expectType<GainNode | undefined>(audioContainer.gainNode);
expectType<boolean>(audioContainer.isBuffer);
expectType<boolean>(audioContainer.loaded);
expectType<boolean>(audioContainer.playing);
expectType<boolean>(audioContainer.loop);
expectType<number>(AudioContainer.MAX_BUFFER_DURATION);
expectType<AudioBuffer | null | undefined>(audioContainer.buffer);
expectType<AudioContext>(audioContainer.context);
expectType<number | undefined>(audioContainer.duration);
expectType<HTMLMediaElement | undefined>(audioContainer.element);
expectType<Promise<void>>(audioContainer.load());
expectType<void>(audioContainer.play(0, () => undefined));
expectType<void>(audioContainer.stop());